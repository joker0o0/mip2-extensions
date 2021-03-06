export const animatePresets = {
  'fade-in': {
    duration: 500,
    easing: 'ease-in',
    delay: 0,
    keyframes: [
      {
        opacity: 0
      },
      {
        opacity: 1
      }
    ]
  },
  'fly-in-top': {
    duration: 500,
    easing: 'ease-in',
    delay: 0,
    keyframes: function (offset) {
      const offsetY = -(offset.top + offset.height)
      return [
        {
          transform: 'translate3d(0, ' + offsetY + 'px, 0)'
        },
        {
          transform: 'translate3d(0, 0, 0)'
        }
      ]
    }
  },
  'fly-in-bottom': {
    duration: 500,
    easing: 'ease-in',
    delay: 0,
    keyframes: function (offset) {
      const offsetY = offset.pageHeight - offset.top
      return [
        {
          transform: 'translate3d(0, ' + offsetY + 'px, 0)'
        },
        {
          transform: 'translate3d(0, 0, 0)'
        }
      ]
    }
  },
  'fly-in-left': {
    duration: 500,
    delay: 0,
    easing: 'ease-in',
    keyframes: function (offset) {
      const offsetX = -(offset.realLeft + offset.width)
      return [
        {
          transform: 'translate3d(' + offsetX + 'px, 0, 0)'
        },
        {
          transform: 'translate3d(0, 0, 0)'
        }
      ]
    }
  },
  'fly-in-right': {
    duration: 500,
    delay: 0,
    easing: 'ease-in',
    keyframes: function (offset) {
      const offsetX = offset.pageWidth - offset.realLeft
      return [
        {
          transform: 'translate3d(' + offsetX + 'px, 0, 0)'
        },
        {
          transform: 'translate3d(0, 0, 0)'
        }
      ]
    }
  },
  'fade-in-top': {
    duration: 500,
    easing: 'ease-in',
    delay: 0,
    keyframes: function (offset) {
      const offsetY = -50
      return [
        {
          opacity: 0,
          transform: 'translate3d(0, ' + offsetY + 'px, 0)'
        },
        {
          opacity: 1,
          transform: 'translate3d(0, 0, 0)'
        }
      ]
    }
  },
  'fade-in-bottom': {
    duration: 500,
    easing: 'ease-in',
    delay: 0,
    keyframes: function (offset) {
      const offsetY = 50
      return [
        {
          opacity: 0,
          transform: 'translate3d(0, ' + offsetY + 'px, 0)'
        },
        {
          opacity: 1,
          transform: 'translate3d(0, 0, 0)'
        }
      ]
    }
  },
  'fade-in-left': {
    duration: 500,
    delay: 0,
    easing: 'ease-in',
    keyframes: function (offset) {
      const offsetX = -50
      return [
        {
          opacity: 0,
          transform: 'translate3d(' + offsetX + 'px, 0, 0)'
        },
        {
          opacity: 1,
          transform: 'translate3d(0, 0, 0)'
        }
      ]
    }
  },
  'fade-in-right': {
    duration: 500,
    delay: 0,
    easing: 'ease-in',
    keyframes: function (offset) {
      const offsetX = 50
      return [
        {
          opacity: 0,
          transform: 'translate3d(' + offsetX + 'px, 0, 0)'
        },
        {
          opacity: 1,
          transform: 'translate3d(0, 0, 0)'
        }
      ]
    }
  },
  'scale-in': {
    duration: 1000,
    delay: 0,
    easing: 'linear',
    keyframes: function (offset) {
      return [
        {
          transform: 'scale(1)'
        },
        {
          transform: 'scale(1.1)'
        }
      ]
    }
  },
  'twirl-in': {
    duration: 1000,
    delay: 0,
    easing: 'cubic-bezier(.2, .75, .4, 1)',
    keyframes: [
      {
        transform: 'rotate(-540deg) scale(0.1)',
        opacity: 0
      },
      {
        transform: 'none',
        opacity: 1
      }
    ]
  },
  'whoosh-in-left': {
    duration: 500,
    delay: 0,
    easing: 'ease-in',
    keyframes: function (offset) {
      const offsetX = -(offset.realLeft + offset.width)
      return [
        {
          opacity: 0,
          transform: 'translate3d(' + offsetX + 'px, 0, 0) scale(.15)'
        },
        {
          opacity: 1,
          transform: 'translate3d(0, 0, 0) scale(1)'
        }
      ]
    }
  },
  'whoosh-in-right': {
    duration: 500,
    delay: 0,
    easing: 'ease-in',
    keyframes: function (offset) {
      const offsetX = offset.realLeft + offset.width
      return [
        {
          opacity: 0,
          transform: 'translate3d(' + offsetX + 'px, 0, 0) scale(.15)'
        },
        {
          opacity: 1,
          transform: 'translate3d(0, 0, 0) scale(1)'
        }
      ]
    }
  },
  'rotate-in-left': {
    duration: 700,
    easing: 'ease-in',
    delay: 0,
    keyframes: function (offset) {
      const offsetX = -(offset.realLeft + offset.width)
      return [
        {
          transform: 'translate3d(' + offsetX + 'px, 0, 0) rotate(-360deg)'
        },
        {
          transform: 'translate3d(0, 0, 0) rotate(0)'
        }
      ]
    }
  },
  'rotate-in-right': {
    duration: 700,
    easing: 'ease-in',
    delay: 0,
    keyframes: function (offset) {
      const offsetX = offset.realLeft + offset.width
      return [
        {
          transform: 'translate3d(' + offsetX + 'px, 0, 0) rotate(360deg)'
        },
        {
          transform: 'translate3d(0, 0, 0) rotate(0)'
        }
      ]
    }
  }
}
