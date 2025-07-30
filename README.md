# Invory - Sito Web Ufficiale

Sito web moderno e responsive per l'app Invory, ottimizzato per SEO e progettato per promuovere la soluzione di gestione scorte per piccole aziende.

## 🎯 Caratteristiche Principali

- **Design Moderno**: Interfaccia pulita e professionale con palette teal e bianco
- **Responsive**: Ottimizzato per desktop, tablet e mobile
- **SEO Ottimizzato**: Meta tag, schema markup e struttura semantica
- **Performance**: Caricamento veloce con lazy loading e ottimizzazioni
- **Accessibilità**: Navigazione da tastiera e screen reader friendly
- **Logo Ottimizzato**: Dimensioni responsive e proporzionate

## 🚀 Tecnologie Utilizzate

- **HTML5**: Struttura semantica e accessibile
- **CSS3**: Design moderno con CSS Grid e Flexbox
- **JavaScript**: Funzionalità interattive e animazioni
- **Fonts**: Inter (Google Fonts)
- **Icons**: SVG inline per performance

## 📁 Struttura del Progetto

```
Invory Web Site/
├── index.html          # Pagina principale
├── css/
│   └── style.css       # Stili principali (ottimizzati)
├── js/
│   └── main.js         # JavaScript e funzionalità
├── images/             # Immagini del sito
│   ├── hero-app.png    # Screenshot app hero (sfondo trasparente)
│   ├── logo.png        # Logo Invory
│   ├── favicon.ico     # Favicon
│   └── og-image.jpg    # Open Graph image
├── robots.txt          # SEO robots
├── sitemap.xml         # Sitemap per motori di ricerca
├── .htaccess           # Ottimizzazioni server
└── README.md           # Documentazione
```

## 🎨 Palette Colori

- **Primario**: Teal (#009688)
- **Secondario**: Bianco (#FFFFFF)
- **Testo**: Grigio scuro (#333333)
- **Testo chiaro**: Grigio medio (#666666)
- **Sfondo**: Bianco (#FFFFFF)
- **Sfondo chiaro**: Grigio molto chiaro (#f8f9fa)

## 📱 Sezioni del Sito

1. **Header**: Logo e navigazione principale
2. **Hero**: Headline principale e CTA
3. **Funzionalità**: 4 card con le caratteristiche principali
4. **Demo**: Screenshot/video dell'applicazione
5. **Benefici**: Vantaggi per il cliente
6. **Prezzi**: Piano di abbonamento
7. **Testimonianze**: Social proof
8. **CTA Finale**: Call to action
9. **Footer**: Contatti e link utili

## 🔧 Installazione e Utilizzo

### Requisiti
- Server web (Apache, Nginx, o server locale)
- Browser moderno con supporto ES6+

### Installazione Locale

1. **Clona o scarica il progetto**
   ```bash
   git clone [repository-url]
   cd "Invory Web Site"
   ```

2. **Avvia server locale**
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (se hai http-server installato)
   npx http-server
   
   # Con PHP
   php -S localhost:8000
   ```

3. **Apri nel browser**
   ```
   http://localhost:8000
   ```

### Deploy Online

Il sito è pronto per essere caricato su qualsiasi hosting web. Assicurati di:

1. Caricare tutti i file mantenendo la struttura delle cartelle
2. Configurare il dominio nel file `index.html` (meta tag Open Graph)
3. Ottimizzare le immagini per il web
4. Configurare HTTPS per sicurezza

## 🎯 Ottimizzazioni SEO Implementate

### Meta Tag
- Title ottimizzato per "Inventory Management"
- Description con parole chiave target
- Open Graph per social media
- Twitter Cards
- Favicon e Apple Touch Icon

### Schema Markup
- SoftwareApplication schema
- AggregateRating per recensioni
- Offer per prezzi

### Struttura Semantica
- Header, main, section, footer
- H1-H3 hierarchy ottimizzata
- Alt text per immagini
- ARIA labels dove necessario

### Performance
- Lazy loading immagini
- CSS e JS ottimizzati
- Font preconnect
- Debounced scroll events

## 📊 Parole Chiave Target

- Inventory Management
- Stock Management
- Warehouse Solution
- Magazzino
- Gestione Scorte
- Bar e locali
- Piccoli negozi
- Gestione inventario

## 🎨 Personalizzazioni

### Modificare i Colori
Modifica le variabili CSS in `css/style.css`:
```css
:root {
    --primary-color: #009688;
    --primary-light: #4db6ac;
    --primary-dark: #00695c;
    /* ... */
}
```

### Aggiungere Contenuti
1. **Nuove sezioni**: Aggiungi HTML in `index.html`
2. **Stili**: Estendi `css/style.css`
3. **Funzionalità**: Modifica `js/main.js`

### Modificare Testi
Tutti i testi sono nel file `index.html`. Cerca e sostituisci i contenuti mantenendo la struttura HTML.

## 📞 Contatti e Supporto

### Form di Contatto
Il form di contatto è configurato per inviare notifiche. Per l'integrazione reale, modifica `handleContactForm()` in `js/main.js`.

## 🚀 Prossimi Passi

1. **Aggiungere immagini reali** dell'app Invory
2. **Configurare analytics** (Google Analytics, Facebook Pixel)
3. **Implementare form di contatto** con backend
4. **Aggiungere blog section** per contenuti SEO
5. **Ottimizzare per Core Web Vitals**
6. **Implementare PWA** per installazione app

## 📈 Monitoraggio e Analytics

### Google Analytics 4
Aggiungi il tracking code nel `<head>` di `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Eventi Personalizzati
Il sito traccia automaticamente:
- Click sui CTA
- Scroll depth
- Time on page

## 🔒 Sicurezza

- HTTPS obbligatorio per produzione
- CSP headers consigliati
- Validazione input form
- Sanitizzazione contenuti dinamici

## 📱 Test e Compatibilità

### Browser Supportati
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Dispositivi Testati
- Desktop (1920x1080, 1366x768)
- Tablet (768x1024)
- Mobile (375x667, 414x896)

## 📄 Licenza

Questo progetto è creato per Invory. Tutti i diritti riservati.

---

**Creato con ❤️ per Invory** - La soluzione di gestione scorte più semplice per piccole aziende. # invory-website
