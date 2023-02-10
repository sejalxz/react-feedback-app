import loading from '../assets/spinnner.gif'

function Spinner() {
  return (
      <img src={loading} alt="loading..." style={{
          width: "100px",
          margin: 'auto',
          display: 'block'
        }} />
  )
}

export default Spinner