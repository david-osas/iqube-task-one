const personal = [
  {
    title: 'Name',
    text: null,
    asterisk: false,
    type: 'text',
  },
  {
    title: 'Email Address',
    text: 'The purchase receipt would be sent to this address',
    asterisk: true,
    type: 'email',
  },
  {
    title: 'Address 1',
    text: null,
    asterisk: false,
    type: 'text',
  },
  {
    title: 'Address 2',
    text: null,
    asterisk: false,
    type: 'text',
  },
]

const personalGroup = [
  {
    title: 'Local Government',
    text: null,
    asterisk: false,
    type: 'text',
  },
  {
    title: 'State',
    text: null,
    asterisk: false,
    type: 'select',
    options: ['Select a state', 'Lagos', 'Ogun', 'Abuja', 'Edo', 'Kano', 'Niger'],
  }
]

export{personal, personalGroup};
