const personal = [
  {
    title: 'Name ',
    text: null,
    asterisk: false,
    type: 'text',
  },
  {
    title: 'Email Address ',
    text: 'The purchase receipt would be sent to this address',
    asterisk: true,
    type: 'email',
  },
  {
    title: 'Address 1 ',
    text: null,
    asterisk: false,
    type: 'text',
  },
  {
    title: 'Address 2 ',
    text: null,
    asterisk: false,
    type: 'text',
  },
]

const personalGroup = [
  {
    title: 'Local Government ',
    text: null,
    asterisk: false,
    type: 'text',
  },
  {
    title: 'State ',
    text: null,
    asterisk: false,
    type: 'select',
    options: ['Select a state', 'Lagos', 'Ogun', 'Abuja', 'Edo', 'Kano', 'Niger'],
  }
]

const billing = [
  {
    title: 'Name on Card ',
    text: null,
    asterisk: true,
    type: 'text',
  },
  {
    title: 'Card Type ',
    text: null,
    asterisk: true,
    type: 'select',
    options: ['Select a card', 'Visa', 'Mastercard', 'Verve'],
  }
]

const billingGroup = [
  {
    title: 'Card details ',
    text: null,
    asterisk: true,
    type: 'number',
  },
  {
    title: 'Expiry date ',
    text: null,
    asterisk: true,
    type: 'month',
  },
  {
    title: 'CVV ',
    text: null,
    asterisk: true,
    type: 'number',
  }
]

export{personal, personalGroup, billing, billingGroup};
