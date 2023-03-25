import { Container } from 'reactstrap';
import CampsitesList from '../features/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='Directory'></SubHeader>
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;