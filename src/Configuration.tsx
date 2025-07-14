export type Configuration = {
  /**
   * Display name of the bot shown in the header and intro.
   */
  botName?: string

  /**
   * URL of the bot avatar image.
   */
  botAvatar?: string

  /**
   * Short description or subtitle for the bot.
   */
  botDescription?: string

  /**
   * Contact phone information.
   */
  phone?: { title?: string; link?: string }

  /**
   * Contact email information.
   */
  email?: { title?: string; link?: string }

  /**
   * Website link to show in the contact info section.
   */
  website?: { title?: string; link?: string }

  /**
   * Link to the Terms of Service page.
   */
  termsOfService?: { title?: string; link?: string }

  /**
   * Link to the Privacy Policy page.
   */
  privacyPolicy?: { title?: string; link?: string }

  /**
   * Custom placeholder text for the message composer input field.
   */
  composerPlaceholder?: string

  /**
   * Primary theme color of the chat (hex, rgb, or named color).
   */
  color?: string

  /**
   * Border radius of the chat widget between 1 and 4.
   */
  radius?: number

  /**
   * UI theme mode — "light" or "dark".
   */
  themeMode?: 'light' | 'dark'

  /**
   * Style variant of the chat window — "solid" or "soft".
   */
  variant?: 'solid' | 'soft'

  /**
   * Font family used inside the webchat — one of the supported fonts.
   */
  fontFamily?: 'rubik' | 'inter' | 'ibm' | 'fira'

  /**
   * Whether to display the "Powered by Botpress" branding.
   */
  showPoweredBy?: boolean
}