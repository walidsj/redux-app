export const homeBanner = (state = false, action) => {
   switch (action.type) {
      case 'UPDATE_BANNER':
         return action.payload
      default:
         return state
   }
}