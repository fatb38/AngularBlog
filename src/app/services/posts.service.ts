import { Injectable } from '@angular/core';
import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [
    {
      content : 'Ceci est le tout premier post du blog !!',
      createdAt : 1572817967364,
      loveIts : 4,
      title : 'Post 1'
    }, {
      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem consectetur dicta, ducimus eius et eum magnam maiores minima nemo nesciunt nulla odit quidem recusandae repellat repudiandae sunt tempora',
      createdAt : 1572819685880,
      loveIts : -2,
      title : 'Post 2'
    }, {
      content : 'Ce blog a été réalisé avec Angular',
      createdAt : 1572819704956,
      loveIts : 0,
      title : 'Angular'
    }
  ];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    this.emitPosts();
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  updatePosts() {
    this.emitPosts();
  }
}
