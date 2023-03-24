import { useState } from 'react'; 
import { Container, Row, Col } from 'reactstrap';
import CampsiteDetail from '../features/CampsiteDetail';
import CampsitesList from '../features/CampsitesList';
import { selectCampsiteById } from '../features/campsitesSlice';

    const CampsitesDirectoryPage = () => {
        const [campsiteId, setCampsiteId] = useState(0);
        const selectedCampsite = selectCampsiteById(campsiteId);
        <CampsitesList setCampsiteId={setCampsiteId} />

        return (
            <Container>
                
                <Row>
                    <Col sm='5' md='7'>
                        <CampsitesList />
                    </Col>
                    <Col sm='7' md='5'>
                        <CampsiteDetail campsite={selectedCampsite} />
                    </Col>
                </Row>
            </Container>
        );
    };

export default CampsitesDirectoryPage;