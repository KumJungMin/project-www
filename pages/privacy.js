import Layout from '../components/Layout'

import Privacy from './main/Privacy'

import './style.css'

const PrivacyPageContent = <div>
    <Privacy />
</div>;

export default function Privacypage() {
  return <Layout children={PrivacyPageContent} title='Privacy' />;
};