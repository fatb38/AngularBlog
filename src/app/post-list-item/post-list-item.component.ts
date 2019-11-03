import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
  }

  onLoveIts(choice: number) {
    switch (choice) {
      case 1: // 1 is for love
        this.post.loveIts++;
        break;
      case 0: // 0 is for don't love
        this.post.loveIts--;
        break;
    }
    this.postsService.updatePosts();
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

}
