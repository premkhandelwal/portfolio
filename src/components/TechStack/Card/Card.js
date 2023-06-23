import Card from 'react-bootstrap/Card';

function TechCard(props) {
  const { list, logo, variant, text } = props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Img variant="top" src={logo} style={{blockSize: "150px"}} />
      <br />
      <br />
      <Card.Title>{variant}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Card.Footer>

      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default TechCard;