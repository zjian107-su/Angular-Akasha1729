import { Component, OnInit } from '@angular/core';
import Comment from './interfaces/comment.interface';

@Component({
  selector: 'app-brainstorm-vote',
  templateUrl: './brainstorm-vote.component.html',
  styleUrls: ['./brainstorm-vote.component.css'],
})
export class BrainstormVoteComponent implements OnInit {
  highetsVoteID: number = -1;

  comments: Comment[] = [
    { id: 1, votes: 12, text: 'A' },
    { id: 2, votes: 8, text: 'B' },
    { id: 3, votes: 16, text: 'C' },
    { id: 4, votes: 4, text: 'D' },
    { id: 5, votes: 5, text: 'E' },
  ];

  ngOnInit() {
    this.highetsVoteID = this.getIDWithHighestVotes(this.comments);
  }

  upVote(comment_id: number): void {
    for (let comment of this.comments) {
      if (comment.id === comment_id) {
        comment.votes++;
        break;
      }
    }
    this.rerank();
  }

  downVote(comment_id: number): void {
    for (let comment of this.comments) {
      if (comment.id === comment_id) {
        comment.votes--;
        break;
      }
    }
    this.rerank();
  }

  rerank() {
    let newComments = this.comments.sort((a, b) => {
      return b.votes - a.votes;
    });
    this.comments = newComments;
    this.highetsVoteID = this.getIDWithHighestVotes(this.comments);
  }

  isHighestID(comment_id: number) {
    return comment_id === this.highetsVoteID;
  }

  getIDWithHighestVotes(comments: Comment[]) {
    let highestID = -1;
    let highestVotes = -1;
    for (let comment of comments) {
      if (comment.votes > highestVotes) {
        highestVotes = comment.votes;
        highestID = comment.id;
      }
    }
    return highestID;
  }
}
