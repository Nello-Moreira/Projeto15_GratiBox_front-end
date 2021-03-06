import image02 from '../../assets/image02.jpg';

import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';

import PinkCard from './PinkCard';
import DefaultButton from '../buttons/DefaultButton';

export default function MonthlyPlanSubscribeCard() {
	const navigate = useNavigate();

	return (
		<PinkCard>
			<img src={image02} alt='imagem ilustrativa do plano' />

			<p>
				Você recebe um box por mês.
				<br />
				<br />
				Ideal para quem está começando agora.
			</p>

			<DefaultButton
				onClick={() => {
					navigate(routes.planInformations);
				}}
			>
				Assinar
			</DefaultButton>
		</PinkCard>
	);
}
