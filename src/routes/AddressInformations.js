import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import SubscriptionContext from '../contexts/SubscriptionContext';
import routes from './routes';

import CircleLoader from '../components/loaders/CircleLoader';
import PageContainer from '../components/containers/PageContainer';
import PageTitle from '../components/titles/PageTitle';
import PageSubTitle from '../components/titles/PageSubTitle';
import AddressInformationsCard from '../components/planCards/addressInformationsCard/AddressInformationsCard';
import DefaultButton from '../components/buttons/DefaultButton';

export default function Address() {
	const [pageFirstLoad, setPageFirstLoad] = useState(true);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const { subscription } = useContext(SubscriptionContext);

	useEffect(() => {
		if (!user.token) {
			navigate(routes.home);
		}
		setPageFirstLoad(false);
	}, [user.token]);

	function subscribe() {
		if (loading) return;
		if (Object.values(subscription.address).includes(null)) {
			alert('Preencha todos os campos');
			return;
		}
		setLoading(true);
		navigate(routes.subscriber);
	}

	return pageFirstLoad ? (
		<CircleLoader />
	) : (
		<PageContainer>
			<PageTitle>Bom te ver por aqui, {user.name}.</PageTitle>

			<PageSubTitle>
				“Agradecer é arte de atrair coisas boas”
			</PageSubTitle>

			<AddressInformationsCard loading={loading} />

			<NextPageButton onClick={subscribe}>Finalizar</NextPageButton>
		</PageContainer>
	);
}

const NextPageButton = styled(DefaultButton)`
	padding: 10px 20px;
	margin-top: 15px;
`;
