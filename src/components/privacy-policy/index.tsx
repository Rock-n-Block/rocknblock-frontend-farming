import {
    FunctionalComponent, h
} from 'preact';

import style from './style.scss';

const PrivacyPolicy: FunctionalComponent = () => (
    <div id='top' className={style.container}>
        <div className={style.content}>
            <h2>Rock'n'Block Privacy Policy</h2>
            <div className={style.paragraph}>
                <div className={style.paragraph__date}>01.07.2021</div>
                This Privacy Policy explains how Rock'n'Block collects, uses,
                shares, and protects user information obtained through the
                Rock'n'Block.io website. The terms “we,” “us,” and “our” refer
                to Rock'n'Block and its affiliates. When we ask for certain
                personal information from users it is because we are required by
                law to collect this information or it is relevant for specified
                purposes. Any non-required information you provide to us is done
                so voluntarily. You decided whether to provide us with this
                non-required information; you may not be able to access or
                utilize all of our Services if you choose not to.
                <br />
                <br />
                By using the Site, you consent to the data practices described
                in this Privacy Policy. On occasion, Rock'n'Block may revise
                this Privacy Policy to reflect changes in law or our personal
                data collection and use practices. If material changes are made
                to this Privacy Policy, the changes will be announced by posting
                on the site. We will ask for your consent before using your
                information for any purpose that is not covered in this Privacy
                Policy.
                <br />
                <br />
                The latest privacy policy has incorporated elements from the
                General Data Protection Regulation (GDPR) as we act in
                accordance with its personal information processing rules within
                the European Economic Area (EEA).
            </div>
            <h2>What kinds of information do we collect?</h2>
            <div className={style.paragraph}>
                We want you to understand the types of information we collect
                when you register for and use Rock'n'Block’s services
            </div>
            <h3>Information you provide to us at registration</h3>
            <div className={style.paragraph}>
                When you create a Rock'n'Block Account, you provide us with
                personal information that includes your contact information
                (Email Address and a password). You can also choose to add a
                Google Authenticator account to be used for 2FA verification for
                improved security.
            </div>
            <h3>Service Usage Information</h3>
            <div className={style.paragraph}>
                Through your use of the Rock'n'Block platform, we also can
                monitor and collect tracking information related to usages such
                as access date & time, device identification, operating system,
                browser type, and IP address. This information may be directly
                obtained by Rock'n'Block or through third-party services. This
                service usage data helps our systems to ensure that our
                interface is accessible for users across all platforms and can
                aid during criminal investigations.
            </div>
            <h2>Why does Rock'n'Block collect this information</h2>
            <h3>To provide and maintain our services</h3>
            <div className={style.paragraph}>
                When you create a Rock'n'Block Account, you provide us with
                personal information that includes your contact information
                (Email Address We use the information collected to deliver our
                services and verify user identity.
                <br />
                <br />
                We use the IP address and unique identifiers stored in your
                device’s cookies to help us authenticate your identity and
                provide our service. Given our legal obligations and system
                requirements, we cannot provide you with services without data
                like identification, contact information, and
                transaction-related information. a password). You can also
                choose to add a Google Authenticator account to be used for 2FA
                verification for improved security.
            </div>
            <h3>To protect our users</h3>
            <div className={style.paragraph}>
                We use the information collected to protect our platform, users’
                accounts, and archives. We use IP addresses and cookie data to
                protect against automated abuse such as spam, phishing, and
                Distributed Denial of Service (DDoS) attacks.
            </div>
            <h3>To comply with legal and regulatory requirements</h3>
            <div className={style.paragraph}>
                Respect for the privacy and security of data you store with
                Rock'n'Block informs our approach to complying with regulations,
                governmental requests, and user-generated inquiries. We will not
                disclose or provide any personal information to third-party
                sources without review from our legal case team and/or prior
                consent from the user.
            </div>
            <h3>To measure site performance</h3>
            <div className={style.paragraph}>
                We actively measure and analyze data to understand how our
                services are used. This review activity is conducted by our
                operations team to continually improve our platform’s
                performance and to resolve issues with the user experience.
                <br />
                <br />
                We continuously monitor our systems’ activity information and
                communications with users to look for and quickly fix problems.
            </div>
            <h3>To communicate with you</h3>
            <div className={style.paragraph}>
                We use personal information collected, like an email address to
                interact with users directly when providing customer support on
                a ticket or to keep you informed on logins, transactions, and
                security. Without processing your personal information for
                confirming each communication, we will not be able to respond to
                your submitted requests, questions, and inquiries. All direct
                communications are kept confidential and reviewed internally for
                accuracy.
            </div>
            <h2>How does Rock'n'Block protect user data</h2>
            <div className={style.paragraph}>
                Rock'n'Block has implemented a number of security measures to
                ensure that your information is not lost, abused, or altered.
                Our data security measures include, but are not limited to: PCI
                Scanning, Secured Sockets Layered encryption technology,
                pseudonymization, internal data access restrictions, and strict
                physical access controls to buildings & files. Please note that
                it is impossible to guarantee 100% secure transmission of data
                over the Internet nor method of electronic storage. As such, we
                request that you understand the responsibility to independently
                take safety precautions to protect your own personal
                information.
                <br />
                <br />
                If you suspect that your personal information has been
                compromised, especially account and/or password information,
                please contact Rock'n'Block customer service immediately.
            </div>
            <h2>Contact us</h2>
            <div className={style.paragraph}>
                We are committed to respecting the freedoms and rights of all
                our Rock'n'Block users who have placed their trust in our
                service. If you should have any questions or concerns regarding
                this Privacy Policy, or if you would like to file a Data
                Protection request, please contact us at
                <a href='mailto:hello@rocknblock.io'> hello@rocknblock.io</a>
.
            </div>
        </div>
    </div>
);

export default PrivacyPolicy;
