# Configurazione Formspree per Invory

## Passi per configurare l'invio email

### 1. Creare un account Formspree
- Vai su [formspree.io](https://formspree.io)
- Registrati con la tua email
- Crea un nuovo form

### 2. Ottenere l'ID del form
- Dopo aver creato il form, Formspree ti fornirà un URL come:
  `https://formspree.io/f/YOUR_FORM_ID`
- Copia l'ID del form (la parte dopo `/f/`)

### 3. Aggiornare il codice HTML
Nel file `index.html`, trova questa riga:
```html
<form class="contact-form__form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Sostituisci `YOUR_FORM_ID` con l'ID reale del tuo form.

### 4. Configurare le notifiche email
- Nel dashboard di Formspree, vai su "Settings"
- Configura l'email di destinazione
- Personalizza il template email se necessario

### 5. Testare il form
- Compila e invia il form di test
- Verifica che ricevi l'email di notifica
- Controlla che tutti i campi vengano inviati correttamente

## Campi del form
Il form include i seguenti campi:
- **Nome del bar** (obbligatorio)
- **Nome referente** (obbligatorio)
- **Email** (obbligatorio)
- **Telefono** (obbligatorio)
- **Messaggio** (facoltativo)

## Personalizzazione
Puoi personalizzare:
- Il template email in Formspree
- I campi del form modificando l'HTML
- La validazione JavaScript
- Gli stili CSS del form 