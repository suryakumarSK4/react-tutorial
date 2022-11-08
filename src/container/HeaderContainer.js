import HeaderComp from '../components/HeaderComp'
import {connect} from 'react-redux'
// import { addToCart } from '../service/actions/Actions'

const mapStateToProps = state => ({
    data:state.cartItems
})
// const mapDispatchToProps = dispatch =>({
//     addToCartHandler: data => dispatch(addToCart(data))
// })
export default connect(mapStateToProps)(HeaderComp)

// export default connect(mapStateToProps,mapDispatchToProps)(HeaderComp)

// export default Home;
