import Footer from "@/components/footer";
import styles from "./styles.module.scss";

export default function Mainpage() {
  let deferredPrompt: any;
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
  });
  const installApp = () => {
    if (!deferredPrompt) {
      alert("이미 앱이 설치되어 있거나 앱을 설치할 수 없는 환경입니다");
      return;
    }
    deferredPrompt.prompt();
  };

  return (
    <>
      <div className={styles.main}>Hi</div>
      <button onClick={installApp}>install</button>
      <Footer />
    </>
  );
}
