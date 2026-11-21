# CramIT

A study app for creating flashcard sets, reviewing them, and quizzing yourself. Everything runs in the browser and your data is saved locally on your device.

**Live demo:** https://nathankanas.github.io/CramIt/HTML/index.html

## Features

- **Study sets:** create sets of terms and definitions and search through them
- **Flashcards:** flip through any set, with next and previous navigation
- **Quiz mode:** multiple-choice questions generated from your sets, with a score at the end
- **Dashboard:** cards studied, day streak, number of sets, average score, a daily challenge and recent activity
- **Dark mode:** the preference is remembered between visits

## Tech

- HTML, CSS and vanilla JavaScript
- Browser `localStorage` for saving data (no backend or accounts yet)
- Hosted on GitHub Pages

## Run locally

1. Clone the repo:
   ````
   git clone https://github.com/NathanKanas/CramIt.git
   ````
2. Open `HTML/index.html` in your browser.

## Project structure

````
HTML/     page templates (dashboard, sets, flashcards, quiz, create)
css/      styles
js/       page scripts
data/     sample data
Images/   logo and images
````

## Roadmap

- [ ] Clean up the code structure and fix known bugs
- [ ] Edit and delete study sets and cards
- [ ] Quiz feedback and more question types
- [ ] Spaced repetition
- [ ] Import and export
- [ ] Accounts and cloud sync
````
````

**To add it to the repo:**

1. In your project folder, create a file named `README.md`:
````
notepad README.md
````
Click Yes when it asks to create the file, paste the text in (without the outer ```` lines), and save.

2. Commit and push:
````
git add README.md
git commit -m "Add README"
git push
````
Refresh your repo page on GitHub and the README appears below the file list.

After you do Phase 1, update two things in it: the live demo link (it becomes `https://nathankanas.github.io/CramIt/`), and the project structure section (the `HTML/` folder goes away and `index.html` moves to the root). If you want, I can send the updated version then.
