import { Component, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit, OnDestroy {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'index-bg');
    this.renderer.addClass(document.body, 'flex');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'index-bg');
    this.renderer.removeClass(document.body, 'flex');
  }
}
