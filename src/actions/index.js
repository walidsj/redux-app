export const increment = (nr) => {
   return {
      type: 'INCREMENT',
      payload: nr
   }
}

export const decrement = () => {
   return {
      type: 'DECREMENT'
   }
}

export const updateBanners = (slides) => {
   return {
      type: 'UPDATE_BANNER',
      payload: slides
   }
}