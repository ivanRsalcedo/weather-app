# Webpack Starter Template

A thing to clone because life's too short!!

Includes: `index.js`, `style.css`, and `template.html`.

---

## Use

Smash that green ["Use this template"](https://github.com/new?template_name=webpack-starter-template&template_owner=ivanRsalcedo) button on GitHub  
→ name your repo
→ then:

```bash
git clone https://github.com/yourname/your-new-repo.git
```
```
cd your-new-repo
```
```
npm install
code .
npm start
```

---

## GitHub Pages Deploy

### First time only:

Make branch to deploy from.

```bash
git branch gh-pages
```

### Every time you deploy:

Run this ritual after making changes you want to publish live.

```bash
git checkout gh-pages && git merge main --no-edit
npm run build
git add dist -f && git commit -m "Deployment commit"
git subtree push --prefix dist origin gh-pages
git checkout main
```

> Also, check if GitHub Pages is set to deploy from `gh-pages` in **Settings → Pages → Source/Branch**.
