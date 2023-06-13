import Container from 'react-bootstrap/Container';
import aboutUsImage from './../icon/about.png';


const AboutUs = () => {
    return (
        <Container>
            <br></br>
            <img src={aboutUsImage} alt="About Us" style={styles.image} />
            <h2>Giriş</h2>
            <p>Üniversite Soru Bankası Oluşturma ve İnternet Üzerinden Deneme
                Sınavı Projesinin hazırlanan bölümlerine ve yapılması planlanan kısmına yönelik
                bir özet hazırladık. Bir sınav uygulama sitesi oluşturmak için backend kısmında
                Java, ve frontend kısmında React teknolojilerini kullandık. </p>

            <h2>Proje Genel Bakışı</h2>

            <p>Üniversite Soru Bankası Oluşturma ve İnternet Üzerinden Deneme Sınavı Projesi,
                öğrencilere çeşitli sınavlara yönelik online pratik imkanı sunan bir web tabanlı
                bir uygulama olarak tasarladık. Kullanıcılar, kayıt oluşturarak veya giriş yaparak
                sınavlara erişebilir, sınavları çözebilir ve sonuçlarını takip edebilirler.</p>
        </Container >
    )
}

const styles = {
    image: {
        width: '100%',
        maxWidth: '300px',
        marginTop: '1rem',
        borderRadius: '8px',
        textAlign: 'center',
    },
};

export default AboutUs
