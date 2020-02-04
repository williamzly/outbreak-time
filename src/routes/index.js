//routes/index.js
import Home from '../pages/Home'
import Story from '../pages/Story'

export default [
  {
    path: "/story/:id",
    component: Story,
  },
  {
    path: "/",
    component: Home,
  }

]
