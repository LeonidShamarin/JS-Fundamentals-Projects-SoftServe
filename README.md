# JS Fundamentals — two landing pages

Two course projects written in vanilla JavaScript, each a complete landing page
with its own build.

| | Project | Live |
|---|---|---|
| `project1-Food/` | **Healthy Food Delivery** — a meal-delivery page: a calorie calculator, a menu loaded from a JSON API, tabbed offers, a slider, modal order forms and a promotion countdown | https://fitnessmenu.netlify.app |
| `project2-window/` | **Balcony Glazing Systems** — a glazing company page: tabbed galleries, a size calculator and a multi-step order form | https://windowssystem.netlify.app |

`project2-window` also lives on its own in
[JS-Fundamentals-Project2-softserve](https://github.com/LeonidShamarin/JS-Fundamentals-Project2-softserve),
which is the copy that gets deployed.

## project1-Food

```
index.html
styles.css, css/
js/
  script.js         wires the modules together
  modules/
    calc.js         daily calorie need from sex, weight, height, age, activity
    cards.js        menu cards fetched from the API and rendered
    forms.js        the order forms
    modal.js        modal windows
    slider.js       the offers slider
    tabs.js         tab switcher
    timer.js        countdown to the end of the promotion
  services/         the fetch wrapper
db.json             the menu data
webpack.config.js
```

Running it:

```
npm install
npx json-server --watch db.json   # menu API on :3000
npx webpack                       # builds js/bundle.js
# then serve the folder, e.g. npx serve .
```

## Worth knowing before touching it

- **The menu API is hard-coded to `http://localhost:3000/menu`** in
  `js/modules/cards.js`. Nothing is listening there on the deployed site, and a
  plain-http request from an https page is blocked as mixed content anyway, so
  the menu section stays empty online — the page is deployed as a layout demo.
  Change that URL to bring the menu back.
- **The forms post to `server.php`.** The file is in the repository, but static
  hosting never executes PHP, so nothing is delivered in production.
- The `db.json` in the repository root is the json-server sample file
  (`posts`/`comments`/`profile`); the one the page actually uses is
  `project1-Food/db.json`.
- `js/bundle.js` is committed — the deploy is a manual upload of the folder,
  there is no CI here.
- Interface text is in Ukrainian.
