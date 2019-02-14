import Card from './Card'

Card.install = function (Vue) {
  Vue.component(Card.name, Card)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Card = Card;
  window.Vue.use(Card);
}

export default Card