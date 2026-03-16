import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../../core/services/project';
import { ProjectModel } from '../../core/models/project';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './case-study.html',
})
export class CaseStudy implements OnInit {
  private route    = inject(ActivatedRoute);
  private projects = inject(ProjectService);
  private sanitizer = inject(DomSanitizer);

  project   = signal<ProjectModel | null>(null);
  figmaUrl  = signal<SafeResourceUrl | null>(null);

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const slug = this.route.snapshot.paramMap.get('slug')!;
    const p = this.projects.getBySlug(slug);
    this.project.set(p ?? null);
    if (p?.figmaUrl) {
      this.figmaUrl.set(
        this.sanitizer.bypassSecurityTrustResourceUrl(p.figmaUrl)
      );
    }
  }
}