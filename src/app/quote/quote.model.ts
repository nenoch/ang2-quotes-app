export class Quote {
  content: string;
  author: string;
  votes: number;

  constructor(content: string, author: string, votes?: number){
    this.content = content;
    this.author = author;
    this.votes = votes || 0;
  }

  voteUp(){
    this.votes += 1;
  }

  voteDown(){
    this.votes -= 1;
  }
}
