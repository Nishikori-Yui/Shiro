import { sample } from '~/lib/lodash'

const placeholderCopywrites = [
  '在這裡說點什麼呢。',
  '小可愛，你想說點什麼呢？',
  '或許此地可以留下足跡',
  '你的留言是我前進的動力！',
  '說點什麼吧，我會好好聽的。',
  '來一發評論，送你一顆小星星！',
  '你的評論會讓我更加努力哦！',
  '留下你的足跡，讓我知道你來過。',
  '我在這裡等你的留言呢！',
  '你的評論是我最大的動力！',
  '來一發評論，讓我知道你的想法吧！',
]
export const getRandomPlaceholder = () => sample(placeholderCopywrites)

export const MAX_COMMENT_TEXT_LENGTH = 500
