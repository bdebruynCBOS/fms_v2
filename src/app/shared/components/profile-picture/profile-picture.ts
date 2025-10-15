import { CommonModule } from '@angular/common';
import { Component, computed, input} from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  imports: [CommonModule],
  templateUrl: './profile-picture.html',
  styleUrl: './profile-picture.scss'
})
export class ProfilePicture {
  displayName = input<string>();
  initials = computed(() => this.createInitials());
  circleColor = computed(() => this.setColor())

  private colors = [
    "#4A90E2",
    "#34C759",
    "#A259FF",
    "#FF9500",
    "#FF3B30"
  ];

  private setColor() {
    const index = Math.floor(Math.random() * Math.floor(this.colors.length));
    const color = this.colors[index];

    return color;
  }

private createInitials() {
 
  const rgx = /(\p{L})\p{L}+/gu;
  const name = this.displayName?.() ?? "User";

  console.info("Name:", name);

 
  const initials = Array.from(name.matchAll(rgx));

  console.info("Matches:", initials);

  return (
    (initials.shift()?.[1] ?? '') + (initials.pop()?.[1] ?? '')
  ).toUpperCase();
}


}
