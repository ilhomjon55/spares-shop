import { Link } from 'react-router-dom';
import './OnlyPage.css';

function OnlyPage() {
	return (
		<>
			<div className='container'>
				<h2 className='onlypage__heading'>
					Пока только страница<Link to='/spares'> Шины</Link> дополнено
				</h2>
			</div>
		</>
	);
}

export default OnlyPage;
