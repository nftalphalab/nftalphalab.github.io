import Layout from '../layouts/Main';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { server } from '../utils/server'; 
import { postData } from '../utils/services'; 

const LoginPage = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    const res = await postData(`${server}/api/login`, {
      email: data.email,
      password: data.password
    });
  };

  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <a><i className="icon-left"></i> Back to store</a>
            </Link>
            <div style={{backgroundImage: 'url(/images/subscribe.jpg)', height: '200px'}} className="subscribe__content1">
          <div className="form-block" >
            <h2>Join the NFT Revolution</h2>
            <p className="form-block__description">From a founder of Zynga and some of the creative minds that brought us 'FarmVille' and 'Words With Friends', comes a team ready to unleash blockchain for gamers.</p>
          </div>
          </div>
          </div>
        </div>
      </section>
     
    </Layout>
  )
}
  
export default LoginPage
  