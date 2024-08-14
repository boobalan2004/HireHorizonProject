import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

import './UserQueries.css';
import logo from './job logo.png';


const UserQueries = () => {
  const [queries, setQueries] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [repliedQueries, setRepliedQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await fetch('http://localhost:9001/path/queries');
        if (response.ok) {
          const data = await response.json();
          setQueries(data);
        } else {
          console.error('Failed to fetch queries');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchQueries();
  }, []);

  const handleReply = (query) => {
    setSelectedQuery(query);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setReplyText('');
  };

  const handleSend = async () => {
    if (selectedQuery) {
      const reply = {
        email: selectedQuery.email,
        replyText: replyText,
      };

      try {
        const response = await fetch('http://localhost:9001/path/reply', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reply),
        });

        if (response.ok) {
          console.log('Reply sent successfully');
          setRepliedQueries([...repliedQueries, selectedQuery.id]);
          handleClose();
        } else {
          console.error('Failed to send reply');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div>
    <div className="logo-container">
                <img src={logo} alt="Logo" className="logo3" />
            </div>
    <Container sx={{ mt: 4 }} className="userQueries-container">
      <Typography variant="h4" gutterBottom className="userQueries-title">
        User Queries
      </Typography>
      <List className="userQueries-list">
        {queries.map((query, index) => (
          <React.Fragment key={query.id}>
            <ListItem alignItems="flex-start" className="userQueries-listItem">
              <ListItemText
                primary={`S.No: ${index + 1}`}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.primary">
                      Name: {query.name}
                    </Typography>
                    <br />
                    Email: {query.email}
                    <br />
                    Mobile: {query.mobile}
                    <br />
                    Query: {query.query}
                    <br />
                    {repliedQueries.includes(query.id) ? (
                      <Button
                        variant="contained"
                        sx={{ mt: 1, backgroundColor: 'gray', color: 'white' }}
                        disabled
                      >
                        Replied
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        sx={{ mt: 1, color: 'white' }}
                        onClick={() => handleReply(query)}
                      >
                        Reply
                      </Button>
                    )}
                  </>
                }
              />
            </ListItem>
            {index < queries.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { width: '500px', maxWidth: '90%' } }}
      >
        <DialogTitle>Reply to {selectedQuery?.email}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your reply below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="reply"
            label="Reply"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSend} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
    </div>
  );
};

export default UserQueries;
