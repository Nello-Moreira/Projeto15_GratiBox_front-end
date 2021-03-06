import styled from 'styled-components';

import { useNavigate } from 'react-router';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import SubscriptionContext from '../contexts/SubscriptionContext';
import routes from './routes';

import PageContainer from '../components/containers/PageContainer';
import PageTitle from '../components/titles/PageTitle';
import PageSubTitle from '../components/titles/PageSubTitle';
import PlanInformationsCard from '../components/planCards/planInformationsCard/PlanInformationsCard';
import DefaultButton from '../components/buttons/DefaultButton';

export default function PlanInformations() {
	const { user } = useContext(UserContext);
	const { subscription } = useContext(SubscriptionContext);

	const navigate = useNavigate();

	function checkSelectedPlanInformations() {
		if (!subscription.planTypeId) {
			return alert('Selecione um tipo de plano');
		}
		if (!subscription.deliveryOptionId) {
			return alert('Selecione uma opção de entrega');
		}
		if (subscription.productsList.length === 0) {
			return alert('Selecione ao menos um produto');
		}
		navigate(routes.addressInformations);
	}

	return (
		<PageContainer>
			<PageTitle>Bom te ver por aqui, {user.name}.</PageTitle>

			<PageSubTitle>
				“Agradecer é arte de atrair coisas boas”
			</PageSubTitle>

			<PlanInformationsCard />

			<NextPageButton onClick={checkSelectedPlanInformations}>
				Próximo
			</NextPageButton>
		</PageContainer>
	);
}

const NextPageButton = styled(DefaultButton)`
	padding: 10px 20px;
	margin-top: 15px;
`;
