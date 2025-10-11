/**
 * Blue Slip Sydney – Site Configuration
 * 
 * Update PRICE_FROM with your actual inspection fee.
 * All other values are the verified business details.
 */

export const SITE = {
  // Contact
  PHONE: '(02) 9516 3366',
  PHONE_LINK: 'tel:+61295163366',
  MOBILE: '0412 785 767',
  MOBILE_LINK: 'tel:+61412785767',
  SMS_LINK: 'sms:+61412785767',
  EMAIL: 'info@blueslipsydney.com.au', // Update if different
  
  // Location
  ADDRESS: '63–65 Campbell Street, St Peters NSW 2044',
  SUBURB: 'St Peters',
  STATE: 'NSW',
  POSTCODE: '2044',
  
  // Business
  BUSINESS_NAME: 'Advanced Auto Centre',
  TRADING_NAME: 'Blue Slip Sydney',
  ABN: '13 580 382 185',
  
  // Hours (Monday–Friday 7:00 am–5:30 pm; Saturday 7:00 am–2:00 pm; Sunday closed)
  HOURS: {
    WEEKDAY: 'Mon–Fri 7:00 am–5:30 pm',
    SATURDAY: 'Sat 7:00 am–2:00 pm',
    SUNDAY: 'Sun closed',
  },
  HOURS_FULL: 'Monday to Friday 7:00 am–5:30 pm; Saturday 7:00 am–2:00 pm; Sunday closed',
  
  // Pricing (update this!)
  PRICE_FROM: '<REPLACE_PRICE>',
  
  // Schema.org coordinates (approximate St Peters location)
  GEO_LAT: '-33.9146',
  GEO_LNG: '151.1785',
  
  // Social (add if available)
  FACEBOOK: '',
  INSTAGRAM: '',
  
  // URLs
  CANONICAL_URL: 'https://blueslipsydney.com.au',
}

/**
 * Service areas – Inner West and nearby suburbs
 */
export const SERVICE_AREAS = [
  'St Peters', 'Newtown', 'Alexandria', 'Erskineville', 'Enmore', 
  'Marrickville', 'Tempe', 'Sydenham', 'Redfern', 'Waterloo',
  'Zetland', 'Rosebery', 'Mascot', 'Eastlakes', 'Pagewood',
  'Botany', 'Kingsford', 'Kensington', 'Randwick', 'Maroubra',
  'Coogee', 'Camperdown', 'Stanmore', 'Petersham', 'Lewisham',
  'Dulwich Hill', 'Summer Hill', 'Ashfield', 'Haberfield', 'Five Dock',
  'Croydon', 'Burwood', 'Concord', 'Rhodes', 'Breakfast Point',
  'Leichhardt', 'Annandale', 'Lilyfield', 'Rozelle', 'Balmain',
  'Drummoyne', 'Chippendale', 'Ultimo', 'Haymarket', 'Glebe',
  'Forest Lodge', 'Eveleigh', 'Surry Hills', 'Paddington', 'Darlinghurst',
  'Moore Park', 'Earlwood', 'Wolli Creek', 'Arncliffe', 'Banksia', 'Rockdale',
]

/**
 * SMS pre-filled message body
 */
export const SMS_BODY = encodeURIComponent(
  'Hi, I need a blue slip quote. My suburb is: '
)
