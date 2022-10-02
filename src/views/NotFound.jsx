import imgNotfound from '../assets/image/not-found.png';

const NotFound = () => {
  return (
    <div className='d-flex flex-column align-items-center' style={{backgroundColor: '#f0f2f5'}}>
        <img
              alt=""
              src={ imgNotfound }
              width="1000"
              height="600"
              className="align-top"
            />
    </div>
  )
}

export default NotFound