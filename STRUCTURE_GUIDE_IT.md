# Guida Adattamento Struttura del Progetto

## Modifiche Applicate

### 1. **Percorsi degli Script**
- Index.html → percorsi aggiornati
  - CSS: `href="css/style.css"` 
  - JS: `src="js/script.js"`
  - Logo: `src="assets/logo/..."`
  
- Pagine HTML in `pages/` → percorsi relativi aggiornati
  - CSS: `href="../css/style.css"`
  - Logo: `src="../assets/logo/..."`
  - Link home: `href="../index.html"`

### 2. **Navigazione**
- Index.html → link alle pagine in pages/:
  - `pages/works.html`
  - `pages/about.html`
  - `pages/contact.html`

### 3. **Immagini**
- Vecchio: `images/Logo/`
- Nuovo: `assets/logo/`

## Prossimi Passi - Da Eseguire Manualmente

### Cartelle da Creare:
```
css/                    # Spostare Style.css qui
js/                     # Spostare script.js qui
pages/                  # Spostare about.html, works.html, contact.html
assets/
  └── logo/             # Spostare file logo qui
  └── images/           # Spostare immagini dei progetti qui
```

### Operazioni da fare in Terminal:

```powershell
# 1. Creare le cartelle
mkdir css, js, pages, assets\logo, assets\images

# 2. Spostare i file
move Style.css css\
move Script.js js\script.js
move about.html pages\
move works.html pages\
move contact.html pages\
move "Images\Logo\*" assets\logo\
move "Images\*" assets\images\  # (escluso Logo già spostato)

# 3. Eliminare cartelle vecchie
rmdir Images
rmdir "Logo Images"
rmdir style
rmdir js  # se la vecchia cartella esiste
```

### Verifica Finale:

Una volta spostati i file, la struttura dovrebbe essere:
```
Wrong Site/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── pages/
│   ├── about.html
│   ├── works.html
│   └── contact.html
├── assets/
│   ├── logo/
│   │   ├── Logo.png
│   │   └── Logo White.png
│   └── images/
│       └── (immagini progetti)
├── README.md
├── LICENSE
└── .gitignore
```

## Note

- I file HTML sono già stati aggiornati con i nuovi percorsi
- Lo script JavaScript non necessita modifiche (usa selettori DOM)
- Assicurati che i nomi dei file rispettino la case-sensitivity nei percorsi
- Dopo aver spostato i file, verifica che i link funzionino nel browser