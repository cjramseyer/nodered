/**
 * bengali names were taken from https://github.com/nuhil/bangla-calendar - MIT licensed
 */

const monthNames = ['বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন', 'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র']
const weekDays = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার']
const seasonNames = ['গ্রীষ্ম', 'বর্ষা', 'শরৎ', 'হেমন্ত', 'শীত', 'বসন্ত']

const digits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']

let banglas

const createBanglas = () => {
  banglas = digits.reduce((o, c, i) => {
    o[c] = i
    return o
  }, {})
}

export const digitToBangla = number => String(number).replace(/\d/g, digit => digits[digit])

export const banglaToDigit = bangla => {
  if (!banglas) createBanglas() // memoize
  const month = monthNames.indexOf(bangla)
  const str = month !== -1
    ? month + 1
    : String(bangla).replace(/./g, bangla => {
      const r = banglas[bangla]
      return r !== undefined ? r : bangla
    })
  return Number(str)
}

export const weekDay = day => weekDays[day]

export const monthName = month => monthNames[month - 1]

export const seasonName = month => seasonNames[Math.floor((month - 1) / 2)] // ('পৌষ' + 'মাঘ') = 'শীত'. Every consecutive two index in 'banglaMonths' indicates a single index in 'banglaSeasons'.
