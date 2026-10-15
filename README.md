# Manohar Kumar CVSS — Academic Profile

Personal academic portfolio website for **Dr. Manohar Kumar CVSS** (Venkata Shiva Satya Manohar Kumar Changalagari), Researcher and Assistant Professor at [Vellore Institute of Technology](https://vit.ac.in/), Department of Quantum AI, School of Computer Science and Engineering (SCOPE).

## Live

| Platform | URL |
|----------|-----|
| Vercel | [manohar-kumar.vercel.app](https://manohar-kumar.vercel.app) |
| GitHub Pages | [manohar052.github.io/manohar_kumar](https://manohar052.github.io/manohar_kumar/) |

## Research Interests

- **AI learning models** for Agriculture, Forestry, Water Resources, Target Detection, Environmental Biodiversity and Pollutants
- **Earth Observation Remote Sensing** — Multispectral, Hyperspectral, LiDAR, and SAR
- **Multi-platform data acquisition** — Terrestrial, Drone, Airborne, and Spaceborne
- Integration of multi-source geospatial remote sensing data

## About the Website

A single-page academic profile built with vanilla HTML, CSS, and JavaScript. No frameworks, no build step — fast and lightweight.

### Sections

- **About** — Bio, contact info, academic badges, research interests
- **Experience** — Teaching and research positions, responsibilities, TA roles
- **Education** — Degrees, workshops, and schools attended
- **Publications** — Journal articles, conference proceedings, and presentations
- **Awards** — Fellowships, grants, and recognitions
- **Skills** — Programming, software, instruments, and languages
- **Contact** — Office address, references, and academic profiles

### Features

- Responsive sidebar navigation (collapses to mobile menu)
- SPA-style section switching with history support
- Monochromatic green palette derived from `hsl(123, 100%, 4%)`
- Mobile-first responsive design (tablet, mobile, small mobile breakpoints)
- Print-friendly styles
- Academic icon support via [Academicons](https://jpswalsh.github.io/academicons/)

## Project Structure

```
.
├── website-code/          # Source website files
│   ├── index.html         # Main HTML
│   ├── styles.css         # Stylesheet
│   ├── script.js          # SPA navigation logic
│   └── assets/
│       └── cv.pdf         # Downloadable CV
├── deployment/            # Deployment copy
├── CV_Manohar_24092026.pdf
├── Photo.jpeg
├── Reference.txt
└── package.json
```

## Local Development

Simply open `website-code/index.html` in a browser. No build tools or server required.

## Deployment

**Vercel:**
```bash
cd website-code
vercel --prod
```

**GitHub Pages:**
The `gh-pages` branch serves the site from root. To update after changes:
```bash
git checkout gh-pages
git checkout main -- website-code/
cp website-code/index.html website-code/styles.css website-code/script.js .
cp -r website-code/assets .
rm -rf website-code
git add -A && git commit -m "Update site" && git push
git checkout main
```

## Academic Profiles

- [Google Scholar](https://scholar.google.com/citations?user=3Mqt2AQAAAAJ&hl=en)
- [ORCiD: 0000-0001-8110-3826](https://orcid.org/0000-0001-8110-3826)
- [ResearchGate](https://www.researchgate.net/profile/Manohar-Kumar-5/research)
- [Scopus ID: 57210964935](https://www.scopus.com/authid/detail.uri?authorId=57210964935)

## Contact

- **Email:** manohar.iist@gmail.com
- **Phone:** +91 96 42 42 06 26
- **Office:** Department of Quantum AI, SCOPE, VIT Vellore, India

---

*Last updated: September 2026*
