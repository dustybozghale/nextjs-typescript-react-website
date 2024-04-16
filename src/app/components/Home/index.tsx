import LinkBox from '@components/LinkBox';
import Tagline from '@components/Tagline';
import config from '@configs/app.json';
import classNames from 'classnames';
import { randomUUID } from 'crypto';
import ProjectLinkBox from 'src/app/components/ProjectLinkBox';
import AboutUs from '../AboutUs';
import Blog from '../Blog';
import Service from '../Service';
import Support from '../Support';

const { BlogPosts, Projects, Services, AboutUs: AboutUsData } = config;
const Home = () => {
  return (
    <div
      className={classNames(
        'text-primary py-4 px-8 my-8',
        'w-full flex flex-col gap-y-16',
        'md:py-12 md:px-16',
        'lg:px-20 lg:gap-y-32'
      )}
    >
      <Tagline />
      <section
        className={classNames(
          'w-full flex flex-col items-start gap-y-8',
          'md:flex-row md:gap-x-16 md:flex-wrap'
        )}
      >
        {BlogPosts.map(({ href, title, source, icon }) => (
          <LinkBox
            key={`blogPost-overlayLink-${href}`}
            href={href}
            title={title}
            source={source}
            icon={icon}
          />
        ))}
      </section>
      <section
        className={classNames(
          'w-full space-y-8 lg:space-y-16',
          'border-t border-medium pt-16'
        )}
      >
        <h3 className={classNames('font-medium text-4xl lg:text-5xl')}>
          Snowflakes are real.
        </h3>
        <div className="flex flex-col gap-y-16">
          {Projects.map(({ href, title, description, icon, awards }) => (
            <ProjectLinkBox
              key={`project-${title.replaceAll(' ', '-')}`}
              href={href}
              title={title}
              description={description}
              awards={awards}
              icon={icon}
            />
          ))}
        </div>
      </section>
      <section
        className={classNames(
          'w-full space-y-8 mt-8',
          'border-t border-medium pt-16'
        )}
      >
        <h3 className={classNames('font-medium text-4xl lg:text-5xl')}>
          Services.
        </h3>
        {Services.map(({ title, description, icons }) => (
          <Service
            title={title}
            description={description}
            icons={icons}
            key={`service-${randomUUID()}`}
          />
        ))}
      </section>
      <section className="w-full border-t border-medium pt-16">
        <AboutUs
          title={AboutUsData.title}
          description={AboutUsData.description}
        />
      </section>
      <section className="w-full border-y border-medium">
        <Support />
      </section>
      <section className="w-full">
        <Blog />
      </section>
    </div>
  );
};
export default Home;
