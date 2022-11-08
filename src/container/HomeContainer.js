import HomeComponent from '../components/HomeComponent'
import {connect} from 'react-redux'
import { addToCart,removeToCart } from '../service/actions/Actions'
// import combineReducers from '../service/reducer/index'

const mapStateToProps = state => ({
    // data:state.cartItems
})
const mapDispatchToProps = dispatch =>({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: () => dispatch(removeToCart())
})
export default connect(mapStateToProps,mapDispatchToProps)(HomeComponent)


// export default Home;