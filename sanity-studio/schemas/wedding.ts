import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'wedding',
  title: 'Wedding Invitation',
  type: 'document',
  fields: [
    // Site Settings & Styling
    defineField({
      name: 'siteSettings',
      title: '🎨 Website Design & Colors',
      type: 'object',
      description: 'Control the overall look and feel of your wedding website',
      fields: [
        defineField({
          name: 'siteName',
          title: '🏷️ Website Name',
          type: 'string',
          description: 'Name that appears in the browser tab',
          initialValue: 'Our Wedding',
          validation: Rule => Rule.required()
        }),
        
        // Main Colors Section
        defineField({
          name: 'primaryColor',
          title: '💎 PRIMARY COLOR → Buttons, Links & Highlights',
          type: 'color',
          description: '🎯 This color appears on: Navigation links, buttons, section titles, timeline dots, and all clickable elements',
          options: {
            disableAlpha: true
          }
        }),
        defineField({
          name: 'secondaryColor',
          title: '✨ SECONDARY COLOR → Accents & Decorations',
          type: 'color',
          description: '🎯 This color appears on: Decorative elements, gradients, secondary buttons, and accent details',
          options: {
            disableAlpha: true
          }
        }),
        
        // Background & Text Colors
        defineField({
          name: 'backgroundColor',
          title: '🏠 BACKGROUND COLOR → Page Background',
          type: 'color',
          description: '🎯 This color appears on: Main page background, section backgrounds, and card backgrounds',
          options: {
            disableAlpha: true
          }
        }),
        defineField({
          name: 'textColor',
          title: '📝 TEXT COLOR → All Written Content',
          type: 'color',
          description: '🎯 This color appears on: All body text, descriptions, venue details, and readable content',
          options: {
            disableAlpha: true
          }
        }),
        
        // Fonts Section
        defineField({
          name: 'primaryFont',
          title: '👑 HEADING FONT → Names & Titles',
          type: 'string',
          description: '🎯 This font appears on: Your names, section headings (When & Where, Gallery, etc.), and main titles',
          options: {
            list: [
              {title: '💃 Dancing Script (Handwritten Style)', value: 'Dancing Script'},
              {title: '✨ Playfair Display (Elegant Serif)', value: 'Playfair Display'},
              {title: '💫 Great Vibes (Cursive Script)', value: 'Great Vibes'},
              {title: '🏛️ Cormorant Garamond (Classic Serif)', value: 'Cormorant Garamond'},
              {title: '🔥 Montserrat (Modern Sans)', value: 'Montserrat'},
              {title: '🧹 Open Sans (Clean Sans)', value: 'Open Sans'},
              {title: '📖 Lora (Readable Serif)', value: 'Lora'},
              {title: '📜 Crimson Text (Traditional)', value: 'Crimson Text'}
            ]
          },
          initialValue: 'Dancing Script'
        }),
        defineField({
          name: 'bodyFont',
          title: '📄 BODY FONT → Descriptions & Details',
          type: 'string',
          description: '🎯 This font appears on: Venue addresses, story text, RSVP details, and all paragraph content',
          options: {
            list: [
              {title: '✨ Playfair Display (Elegant Serif)', value: 'Playfair Display'},
              {title: '📖 Lora (Easy to Read)', value: 'Lora'},
              {title: '🧹 Open Sans (Clean & Modern)', value: 'Open Sans'},
              {title: '🔥 Montserrat (Professional)', value: 'Montserrat'},
              {title: '📜 Crimson Text (Traditional)', value: 'Crimson Text'},
              {title: '💼 Source Sans Pro (Business Style)', value: 'Source Sans Pro'}
            ]
          },
          initialValue: 'Playfair Display'
        }),
        
        // Advanced Section
        defineField({
          name: 'customCSS',
          title: '💻 Custom CSS (For Developers Only)',
          type: 'text',
          description: '⚠️ Advanced users only: Add custom CSS code to override default styling. Leave blank if unsure.',
          rows: 5
        })
      ]
    }),
    
    // Footer Section
    defineField({
      name: 'footer',
      title: '🦶 Footer Section',
      type: 'object',
      description: 'Customize the footer text, colors, and fonts at the bottom of your website',
      fields: [
        defineField({
          name: 'coupleNames',
          title: '💑 Couple Names Display',
          type: 'string',
          description: 'How your names appear in the footer (e.g., "Anupam & Aastha")',
          initialValue: 'Anupam & Aastha'
        }),
        defineField({
          name: 'nameColor',
          title: '🎨 Names Color',
          type: 'color',
          description: 'Color for the couple names in footer',
          options: {
            disableAlpha: true
          },
          initialValue: { hex: '#ffffff' }
        }),
        defineField({
          name: 'nameFont',
          title: '✍️ Names Font',
          type: 'string',
          options: {
            list: [
              {title: '💃 Dancing Script (Romantic Script)', value: 'Dancing Script'},
              {title: '✨ Playfair Display (Elegant Serif)', value: 'Playfair Display'},
              {title: '📖 Lora (Easy to Read)', value: 'Lora'},
              {title: '🧹 Open Sans (Clean & Modern)', value: 'Open Sans'},
              {title: '🔥 Montserrat (Professional)', value: 'Montserrat'}
            ]
          },
          initialValue: 'Dancing Script'
        }),
        defineField({
          name: 'thankYouMessage',
          title: '💝 Thank You Message',
          type: 'string',
          description: 'Message below the names',
          initialValue: 'Thank you for being part of our journey'
        }),
        defineField({
          name: 'messageColor',
          title: '🎨 Message Color',
          type: 'color',
          description: 'Color for the thank you message',
          options: {
            disableAlpha: true
          },
          initialValue: { hex: '#9CA3AF' }
        }),
        defineField({
          name: 'copyrightText',
          title: '© Copyright Text',
          type: 'string',
          description: 'Copyright text at the bottom',
          initialValue: '© 2025 Wedding Invitation'
        }),
        defineField({
          name: 'copyrightColor',
          title: '🎨 Copyright Color',
          type: 'color',
          description: 'Color for the copyright text',
          options: {
            disableAlpha: true
          },
          initialValue: { hex: '#6B7280' }
        })
      ]
    }),
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Legacy Title (for migration)',
          type: 'string',
          description: 'This field is for backward compatibility. Please use the fields below instead.',
          readOnly: true,
          hidden: true
        }),
        defineField({
          name: 'titleStyle',
          title: 'Title Style',
          type: 'string',
          options: {
            list: [
              {title: 'Names with & (Anupam & Aastha)', value: 'ampersand'},
              {title: 'Names with + (Anupam + Aastha)', value: 'plus'},
              {title: 'Names Only (Anupam Aastha)', value: 'names-only'},
              {title: 'Custom Text (write your own)', value: 'custom'}
            ]
          },
          initialValue: 'ampersand'
        }),
        defineField({
          name: 'firstName',
          title: 'First Name',
          type: 'string',
          description: 'e.g., "Anupam"',
          hidden: ({parent}) => parent?.titleStyle === 'custom',
          validation: Rule => Rule.custom((firstName, context) => {
            const parent = context.parent as any
            if (parent?.titleStyle !== 'custom' && !firstName) {
              return 'First name is required'
            }
            return true
          })
        }),
        defineField({
          name: 'secondName',
          title: 'Second Name',
          type: 'string',
          description: 'e.g., "Aastha"',
          hidden: ({parent}) => parent?.titleStyle === 'custom',
          validation: Rule => Rule.custom((secondName, context) => {
            const parent = context.parent as any
            if (parent?.titleStyle !== 'custom' && !secondName) {
              return 'Second name is required'
            }
            return true
          })
        }),
        defineField({
          name: 'customTitle',
          title: 'Custom Title',
          type: 'string',
          description: 'Write your own custom title',
          hidden: ({parent}) => parent?.titleStyle !== 'custom',
          validation: Rule => Rule.custom((customTitle, context) => {
            const parent = context.parent as any
            if (parent?.titleStyle === 'custom' && !customTitle) {
              return 'Custom title is required when using custom style'
            }
            return true
          })
        }),
        defineField({
          name: 'titleFont',
          title: '✍️ Names Font Style',
          type: 'string',
          description: 'Choose the font for the couple names display in the hero section',
          options: {
            list: [
              {title: '💃 Dancing Script (Romantic Script)', value: 'Dancing Script'},
              {title: '✨ Playfair Display (Elegant Serif)', value: 'Playfair Display'},
              {title: '📖 Lora (Easy to Read)', value: 'Lora'},
              {title: '🧹 Open Sans (Clean & Modern)', value: 'Open Sans'},
              {title: '🔥 Montserrat (Professional)', value: 'Montserrat'},
              {title: '📜 Crimson Text (Traditional)', value: 'Crimson Text'},
              {title: '💼 Source Sans Pro (Business Style)', value: 'Source Sans Pro'},
              {title: '🎭 Great Vibes (Elegant Script)', value: 'Great Vibes'},
              {title: '🌸 Pacifico (Fun & Friendly)', value: 'Pacifico'}
            ]
          },
          initialValue: 'Dancing Script'
        }),
        defineField({
          name: 'contentPosition',
          title: '📍 Text Position on Screen',
          type: 'object',
          description: 'Control where the names, subtitle, and date appear on the video/image',
          fields: [
            defineField({
              name: 'vertical',
              title: '⬆️⬇️ Vertical Position',
              type: 'string',
              options: {
                list: [
                  {title: '🔝 Top of Screen', value: 'top'},
                  {title: '🎯 Center of Screen (Default)', value: 'center'},
                  {title: '🔽 Bottom of Screen', value: 'bottom'}
                ]
              },
              initialValue: 'center'
            }),
            defineField({
              name: 'horizontal',
              title: '⬅️➡️ Horizontal Position',
              type: 'string',
              options: {
                list: [
                  {title: '⬅️ Left Side', value: 'left'},
                  {title: '🎯 Center (Default)', value: 'center'},
                  {title: '➡️ Right Side', value: 'right'}
                ]
              },
              initialValue: 'center'
            })
          ]
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          description: 'e.g., "We\'re getting married!"',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'backgroundType',
          title: 'Background Type',
          type: 'string',
          options: {
            list: [
              {title: 'Image', value: 'image'},
              {title: 'Video', value: 'video'}
            ]
          },
          initialValue: 'image'
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          hidden: ({parent}) => parent?.backgroundType !== 'image'
        }),
        defineField({
          name: 'backgroundVideo',
          title: 'Background Video',
          type: 'file',
          options: {
            accept: 'video/*'
          },
          description: 'Upload MP4, WebM, or other video formats',
          hidden: ({parent}) => parent?.backgroundType !== 'video'
        }),
        defineField({
          name: 'videoFallbackImage',
          title: 'Video Fallback Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Shown while video loads or on mobile devices',
          hidden: ({parent}) => parent?.backgroundType !== 'video'
        }),
        defineField({
          name: 'overlayOpacity',
          title: 'Background Overlay Opacity',
          type: 'number',
          validation: Rule => Rule.min(0).max(100),
          initialValue: 30,
          description: 'Darkness of overlay over background image (0-100%)'
        }),
        defineField({
          name: 'textColor',
          title: '📝 HERO TEXT COLOR → Names & Titles Only',
          type: 'color',
          options: {
            disableAlpha: true
          },
          description: '🎯 This color appears ONLY on: Your names and subtitle in the hero section (overrides main text color for hero)'
        }),
        defineField({
          name: 'weddingDate',
          title: 'Wedding Date & Time',
          type: 'datetime',
          validation: Rule => Rule.required(),
          description: 'This will be used for the countdown timer'
        }),
        defineField({
          name: 'showCountdown',
          title: 'Show Countdown Timer',
          type: 'boolean',
          initialValue: true
        }),
        defineField({
          name: 'showScrollIndicator',
          title: 'Show Scroll Down Animation',
          type: 'boolean',
          initialValue: true,
          description: 'Show the animated scroll indicator at bottom of hero section'
        }),
        defineField({
          name: 'scrollIndicatorStyle',
          title: 'Scroll Indicator Style',
          type: 'string',
          options: {
            list: [
              {title: 'Mouse with Dot', value: 'mouse'},
              {title: 'Down Arrow', value: 'arrow'},
              {title: 'Chevron Down', value: 'chevron'},
              {title: 'Text "Scroll Down"', value: 'text'}
            ]
          },
          initialValue: 'mouse',
          hidden: ({parent}) => !parent?.showScrollIndicator
        })
      ]
    }),

    // Ceremonies Section
    defineField({
      name: 'ceremonies',
      title: 'Wedding Ceremonies',
      type: 'object',
      fields: [
        // Haldi Ceremony
        defineField({
          name: 'haldi',
          title: 'Haldi Ceremony',
          type: 'object',
          fields: [
            defineField({
              name: 'enabled',
              title: 'Show Haldi Ceremony',
              type: 'boolean',
              initialValue: true
            }),
            defineField({
              name: 'title',
              title: 'Ceremony Title',
              type: 'string',
              initialValue: 'Haldi Ceremony',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'date',
              title: 'Date & Time',
              type: 'datetime',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'venue',
              title: 'Venue Name',
              type: 'string',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'address',
              title: 'Address',
              type: 'text',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'mapEmbed',
              title: 'Google Maps Embed Code',
              type: 'text',
              description: 'Paste the Google Maps iframe embed code here',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              hidden: ({parent}) => !parent?.enabled
            })
          ]
        }),
        
        // Cocktail & Dinner
        defineField({
          name: 'cocktailDinner',
          title: 'Cocktail & Dinner',
          type: 'object',
          fields: [
            defineField({
              name: 'enabled',
              title: 'Show Cocktail & Dinner',
              type: 'boolean',
              initialValue: true
            }),
            defineField({
              name: 'title',
              title: 'Event Title',
              type: 'string',
              initialValue: 'Cocktail & Dinner',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'date',
              title: 'Date & Time',
              type: 'datetime',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'venue',
              title: 'Venue Name',
              type: 'string',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'address',
              title: 'Address',
              type: 'text',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'mapEmbed',
              title: 'Google Maps Embed Code',
              type: 'text',
              description: 'Paste the Google Maps iframe embed code here',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              hidden: ({parent}) => !parent?.enabled
            })
          ]
        }),

        // Wedding Ceremony
        defineField({
          name: 'wedding',
          title: 'Wedding Ceremony',
          type: 'object',
          fields: [
            defineField({
              name: 'enabled',
              title: 'Show Wedding Ceremony',
              type: 'boolean',
              initialValue: true
            }),
            defineField({
              name: 'title',
              title: 'Ceremony Title',
              type: 'string',
              initialValue: 'Wedding Ceremony',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'date',
              title: 'Date & Time',
              type: 'datetime',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'venue',
              title: 'Venue Name',
              type: 'string',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'address',
              title: 'Address',
              type: 'text',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'mediaType',
              title: 'Media Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Image', value: 'image'},
                  {title: 'Video', value: 'video'},
                  {title: 'None', value: 'none'}
                ]
              },
              initialValue: 'image',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'image',
              title: 'Ceremony Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              hidden: ({parent}) => !parent?.enabled || parent?.mediaType !== 'image'
            }),
            defineField({
              name: 'video',
              title: 'Ceremony Video',
              type: 'file',
              options: {
                accept: 'video/*'
              },
              hidden: ({parent}) => !parent?.enabled || parent?.mediaType !== 'video'
            }),
            defineField({
              name: 'mapEmbed',
              title: 'Google Maps Embed Code',
              type: 'text',
              description: 'Paste the Google Maps iframe embed code here',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              hidden: ({parent}) => !parent?.enabled
            })
          ]
        }),

        // Reception
        defineField({
          name: 'reception',
          title: 'Reception',
          type: 'object',
          fields: [
            defineField({
              name: 'enabled',
              title: 'Show Reception',
              type: 'boolean',
              initialValue: false
            }),
            defineField({
              name: 'title',
              title: 'Event Title',
              type: 'string',
              initialValue: 'Reception',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'date',
              title: 'Date & Time',
              type: 'datetime',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'venue',
              title: 'Venue Name',
              type: 'string',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'address',
              title: 'Address',
              type: 'text',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'mapEmbed',
              title: 'Google Maps Embed Code',
              type: 'text',
              description: 'Paste the Google Maps iframe embed code here',
              hidden: ({parent}) => !parent?.enabled
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              hidden: ({parent}) => !parent?.enabled
            })
          ]
        })
      ]
    }),

    // Venue Section (Legacy - keeping for backward compatibility)
    defineField({
      name: 'venue',
      title: 'Legacy Venue Details (use Ceremonies section above)',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Venue Name',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'text',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'date',
          title: 'Event Date',
          type: 'datetime',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'time',
          title: 'Event Time',
          type: 'string',
          description: 'e.g., "4:00 PM - 10:00 PM"',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'mapEmbed',
          title: 'Google Maps Embed Code',
          type: 'text',
          description: 'Paste the Google Maps iframe embed code here'
        }),
        defineField({
          name: 'description',
          title: 'Venue Description',
          type: 'text'
        })
      ]
    }),

    // Gallery Section
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'object',
      fields: [
        defineField({
          name: 'images',
          title: 'Gallery Images',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                  description: 'Important for SEO and accessibility.'
                }
              ]
            }
          ]
        })
      ]
    }),

    // RSVP Section
    defineField({
      name: 'rsvp',
      title: 'RSVP Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'RSVP Title',
          type: 'string',
          initialValue: 'Will You Join Us?',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'titleFont',
          title: '✍️ RSVP Title Font',
          type: 'string',
          description: 'Choose the font for the RSVP title',
          options: {
            list: [
              {title: '💃 Dancing Script (Romantic Script)', value: 'Dancing Script'},
              {title: '✨ Playfair Display (Elegant Serif)', value: 'Playfair Display'},
              {title: '📖 Lora (Easy to Read)', value: 'Lora'},
              {title: '🧹 Open Sans (Clean & Modern)', value: 'Open Sans'},
              {title: '🔥 Montserrat (Professional)', value: 'Montserrat'},
              {title: '📜 Crimson Text (Traditional)', value: 'Crimson Text'},
              {title: '💼 Source Sans Pro (Business Style)', value: 'Source Sans Pro'}
            ]
          },
          initialValue: 'Playfair Display'
        }),
        defineField({
          name: 'titleColor',
          title: '🎨 RSVP Title Color',
          type: 'color',
          description: 'Color for the RSVP title text',
          options: {
            disableAlpha: true
          }
        }),
        defineField({
          name: 'description',
          title: 'RSVP Description',
          type: 'text',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'descriptionFont',
          title: '✍️ RSVP Description Font',
          type: 'string',
          description: 'Choose the font for the RSVP description text',
          options: {
            list: [
              {title: '💃 Dancing Script (Romantic Script)', value: 'Dancing Script'},
              {title: '✨ Playfair Display (Elegant Serif)', value: 'Playfair Display'},
              {title: '📖 Lora (Easy to Read)', value: 'Lora'},
              {title: '🧹 Open Sans (Clean & Modern)', value: 'Open Sans'},
              {title: '🔥 Montserrat (Professional)', value: 'Montserrat'},
              {title: '📜 Crimson Text (Traditional)', value: 'Crimson Text'},
              {title: '💼 Source Sans Pro (Business Style)', value: 'Source Sans Pro'}
            ]
          },
          initialValue: 'Lora'
        }),
        defineField({
          name: 'descriptionColor',
          title: '🎨 RSVP Description Color',
          type: 'color',
          description: 'Color for the RSVP description text',
          options: {
            disableAlpha: true
          }
        }),
        defineField({
          name: 'backgroundColor',
          title: '🎨 RSVP SECTION COLOR → Background Only',
          type: 'color',
          description: '🎯 This color appears ONLY on: The RSVP section background (overrides main background color for RSVP section)',
          options: {
            disableAlpha: true
          }
        }),
        defineField({
          name: 'formType',
          title: 'Form Type',
          type: 'string',
          options: {
            list: [
              {title: 'Google Forms', value: 'google-forms'},
              {title: 'Typeform', value: 'typeform'},
              {title: 'Custom Embed', value: 'custom'},
              {title: 'Simple Buttons', value: 'buttons'}
            ]
          },
          initialValue: 'google-forms'
        }),
        defineField({
          name: 'googleFormId',
          title: 'Google Form URL or ID',
          type: 'string',
          description: 'Paste the full Google Form URL or just the form ID. Example: https://docs.google.com/forms/d/1FAIpQLSe7XYZ123.../viewform',
          placeholder: 'https://docs.google.com/forms/d/1FAIpQLSe7XYZ123.../viewform',
          hidden: ({parent}) => parent?.formType !== 'google-forms'
        }),
        defineField({
          name: 'formEmbed',
          title: 'Custom Embed Code',
          type: 'text',
          description: 'Full iframe embed code for custom forms',
          hidden: ({parent}) => parent?.formType !== 'custom'
        }),
        defineField({
          name: 'typeformId',
          title: 'Typeform ID',
          type: 'string',
          description: 'Your Typeform ID from the URL',
          hidden: ({parent}) => parent?.formType !== 'typeform'
        }),
        defineField({
          name: 'deadline',
          title: 'RSVP Deadline',
          type: 'datetime'
        }),
        defineField({
          name: 'contactInfo',
          title: 'Contact Information',
          type: 'object',
          fields: [
            defineField({
              name: 'email',
              title: 'Contact Email',
              type: 'string'
            }),
            defineField({
              name: 'phone',
              title: 'Contact Phone',
              type: 'string'
            })
          ]
        })
      ]
    }),

    // Story Section
    defineField({
      name: 'story',
      title: 'Our Story',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Story Title',
          type: 'string',
          initialValue: 'Our Love Story',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'content',
          title: 'Story Content',
          type: 'text',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'images',
          title: 'Story Images',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                  description: 'Important for SEO and accessibility.'
                }
              ]
            }
          ],
          validation: Rule => Rule.max(6)
        })
      ]
    })
  ],

  preview: {
    select: {
      title: 'hero.title',
      media: 'hero.backgroundImage'
    }
  }
})
