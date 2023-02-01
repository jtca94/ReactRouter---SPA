import Carrousel from '../components/Carrousel'

const Home = () => {

  return (
    <div style={{ height: '70vh' }}>
      <div className='row'>
        <h4 style={{ color: '#FF9494' }} className="text-center my-5">Revisa Nuestro Catálogo</h4>

        <div className='col-12 col-sm-6'>
          <Carrousel />
        </div>
        <div className='col-12 col-sm-6 pt-3 pt-sm-0 d-flex align-items-center'>
          <p style={{ color: '#FF9494' }} className='pt-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minus recusandae inventore, animi quam maiores vero consequatur tempora exercitationem, ratione distinctio. Odio tempora eius illo aut facere distinctio labore officiis.</p>
        </div>
      </div>
    </div>
  )
}
export default Home