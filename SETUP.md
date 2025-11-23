# Setup e Pubblicazione - block-editor-react

## Stato Attuale

✅ **Completato:**
1. Struttura del progetto creata in `C:\Siti web\block-editor-react`
2. Componenti Editable e BlockEditor refactorizzati e migliorati
3. Package configurato con Babel e build scripts
4. Documentazione README completa
5. Build eseguito con successo
6. npm link creato e collegato a pkppoker
7. Integrazione in pkppoker completata:
   - BlogEditor.jsx (nuova pagina per creare/modificare articoli)
   - BlogList.jsx (lista articoli con gestione)
   - Route aggiornate
   - Backend aggiornato con endpoint upload-image

## Struttura Progetto block-editor-react

```
C:\Siti web\block-editor-react\
├── src/
│   ├── components/
│   │   ├── BlockEditor/
│   │   │   ├── BlockEditor.jsx
│   │   │   └── BlockEditor.css
│   │   └── Editable/
│   │       ├── Editable.jsx
│   │       └── Editable.css
│   └── index.js
├── examples/
│   └── basic-usage.jsx
├── dist/ (generato dal build)
├── package.json
├── README.md
├── LICENSE
├── .babelrc
├── .gitignore
└── .npmignore
```

## Integrazione in pkppoker

### Nuovi File Creati:
1. `src/pages/Admin/Blog/BlogEditor.jsx` - Editor pagina completa
2. `src/pages/Admin/Blog/BlogList.jsx` - Lista articoli
3. `src/pages/Admin/Blog/BlogList.css` - Stili lista

### File Modificati:
1. `src/routes.jsx` - Aggiunte route per blog-list, blog/nuovo, blog/modifica/:id
2. `src/pages/Admin/Admin.jsx` - Pulsante Blog ora punta a /admin/blog-list
3. `backend/routes/blog.js` - Aggiunto endpoint POST /blog/upload-image

### Route Disponibili:
- `/admin/blog-list` - Lista tutti gli articoli
- `/admin/blog/nuovo` - Crea nuovo articolo
- `/admin/blog/modifica/:id` - Modifica articolo esistente

## Prossimi Passi - DA FARE MANUALMENTE

### 1. Testare l'Integrazione Locale

Avvia il progetto pkppoker e testa:

```bash
# Backend (in una finestra)
cd C:\Siti web\pkppoker\backend
npm start

# Frontend (in un'altra finestra)
cd C:\Siti web\pkppoker
npm run dev
```

Verifica:
- [x] Accesso a `/admin/blog-list`
- [x] Creazione nuovo articolo da `/admin/blog/nuovo`
- [x] Upload immagini funzionante
- [x] Modifica articolo esistente
- [x] Eliminazione articolo
- [x] Toggle pubblicato/bozza

### 2. Preparare per Pubblicazione NPM

Prima di pubblicare, aggiorna il `package.json` in `block-editor-react`:

```json
{
  "name": "block-editor-react",
  "author": "TUO NOME <tua@email.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/TUO_USERNAME/block-editor-react.git"
  },
  "bugs": {
    "url": "https://github.com/TUO_USERNAME/block-editor-react/issues"
  },
  "homepage": "https://github.com/TUO_USERNAME/block-editor-react#readme"
}
```

### 3. Creare Repository GitHub

```bash
cd C:\Siti web\block-editor-react

# Inizializza git
git init

# Aggiungi tutti i file
git add .

# Primo commit
git commit -m "Initial commit: Block Editor React v1.0.0"

# Collega al repository GitHub (dopo averlo creato su github.com)
git remote add origin https://github.com/TUO_USERNAME/block-editor-react.git

# Push
git branch -M main
git push -u origin main
```

### 4. Pubblicare su NPM

**Prerequisiti:**
- Account NPM (crea su https://www.npmjs.com/signup)
- npm CLI installato

**Comandi:**

```bash
cd C:\Siti web\block-editor-react

# Login a NPM (solo la prima volta)
npm login

# Verifica che tutto sia pronto
npm run build

# Pubblica!
npm publish
```

Se il nome `block-editor-react` è già preso, puoi usare uno scoped package:
```bash
npm publish --access public
```

### 5. Usare il Package Pubblicato

Una volta pubblicato su NPM, in qualsiasi progetto futuro potrai:

```bash
# Rimuovi il link locale
npm unlink block-editor-react

# Installa da NPM
npm install block-editor-react
```

## Comandi Utili

### Durante lo Sviluppo del Package

```bash
cd C:\Siti web\block-editor-react

# Rebuild dopo modifiche
npm run build

# In pkppoker, il link è già attivo, basta riavviare il dev server
```

### Aggiornare il Package

```bash
cd C:\Siti web\block-editor-react

# Modifica il codice...
npm run build

# Incrementa versione e pubblica
npm version patch  # 1.0.0 -> 1.0.1
# oppure
npm version minor  # 1.0.0 -> 1.1.0
# oppure
npm version major  # 1.0.0 -> 2.0.0

# Pubblica la nuova versione
npm publish

# Push su GitHub
git push && git push --tags
```

## Note Importanti

1. **Vecchia Modale**: Il file `BlogAdmin.jsx` originale può essere rimosso o tenuto come backup
2. **Immagini**: Le immagini vengono salvate in `backend/uploads/blog/`
3. **Contenuto**: Il contenuto viene salvato come JSON nel campo `contenuto` del database
4. **Bootstrap**: Il package usa alcune classi Bootstrap per la responsività (già presente in pkppoker)

## Troubleshooting

### Il package non si importa
```bash
cd C:\Siti web\pkppoker
npm link block-editor-react
```

### Modifiche al package non si vedono
```bash
cd C:\Siti web\block-editor-react
npm run build
# Riavvia il dev server di pkppoker
```

### Errori di build
```bash
cd C:\Siti web\block-editor-react
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Contatti e Supporto

Se pubblichi il package, ricordati di:
- Aggiungere il tuo contatto nel README
- Creare una sezione Issues su GitHub
- Considerare l'aggiunta di esempi live (CodeSandbox, StackBlitz)
- Aggiungere screenshot/GIF del componente in azione

Buona fortuna con la pubblicazione! 🚀
