import TabLayout from "../components/TabLayout.jsx";
import Link from "../components/Link.jsx";

const InfoPage = () => {
  return (
    <TabLayout title="정보">
      <Link
        label="사용 방법"
        url="https://chromewebstore.google.com/detail/spread-love/dmklbfcmddccklcghkijhgglpgmfedlh?hl=ko&authuser=3"
      />
      <Link
        label="버그 제보"
        url="https://github.com/Team-SpreadLove/spread-love-frontend/issues"
      />
      <Link label="Github" url="https://github.com/SpreadLoveProject/spread-love-frontend" />
    </TabLayout>
  );
};

export default InfoPage;
