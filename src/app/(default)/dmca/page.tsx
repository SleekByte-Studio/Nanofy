const DmcaPage = () => {
	return (
		<div className='container mx-auto min-h-[calc(100vh-5rem)] pb-8'>
			<div className='my-8 items-center flex flex-col'>
				<h1 className='text-2xl text-violet-600 font-semibold'>DMCA Notice</h1>
			</div>
			<div className='max-w-4xl px-3 mx-auto space-y-8 font-medium text-gray-600'>
				<p>
					Nanofy.in provides an URL shortening service, it allows all our
					members to earn for sharing their shorten links anywhere online
					legitimately.
				</p>
				<p>
					Nanofy.in abides by the federal{' '}
					<span className='text-violet-600'>
						Digital Millennium Copyright Act
					</span>
					(DMCA) by responding to notices of alleged infringement that comply
					with the DMCA and other applicable laws. As part of our response, we
					may remove or disable access to material residing on a site that is
					controlled or operated by Nanofy.in that is claimed to be infringing,
					in which case we will make a good-faith attempt to contact the person
					who submitted the affected material so that they may make a counter
					notification, also in accordance with the DMCA.
				</p>
				<p>
					Nanofy.in does not control content hosted on third party websites, and
					cannot remove content from sites it does not own or control. If you
					are the copyright owner of content hosted on a third party site, and
					you have not authorized the use of your content, please contact the
					administrator of that website directly to have the content removed.
				</p>
				<p>
					Before serving either a Notice of Infringing Material or
					Counter-Notification, you may wish to contact a lawyer to better
					understand your rights and obligations under the DMCA and other
					applicable laws. The following notice requirements are intended to
					comply with Creative Commons’ rights and obligations under the DMCA
					and, in particular, section 512(c), and do not constitute legal
					advice.
				</p>
				<div>
					<p>
						Notice of Infringing Material To file a notice of infringing
						material on a site owned or controlled by Nanofy.in, please send us
						a mail containing the following details:
					</p>
					<ul className='ml-6 mt-3'>
						<li className='list-item'>
							• Reasonably sufficient details to enable us to identify the work
							claimed to be infringed.
						</li>
						<li>
							• Reasonably sufficient detail to enable us to identify and locate
							the material that is claimed to be infringing (eg: a link to the
							page that contains the material).
						</li>
						<li>
							• Your contact information so that we can contact you ( phone
							number or email address ).
						</li>
						<li>
							• A statement that you have a good faith belief that the use of
							the material identified in (2) is not authorized by the copyright
							owner, its agent, or the law; A statement, under penalty of
							perjury, that the information in the notification is accurate and
							that you are authorized to act on behalf of the owner of the
							exclusive right that is alleged to be infringed.
						</li>
					</ul>
				</div>
				<p>
					Please report any abuse of Nanofy service including DMCA notices by
					sending email to{' '}
					<a
						className='hover:text-white text-violet-600 transition-colors cursor-pointer hover:bg-violet-600 rounded-lg pb-0.5 px-1'
						href='mailto:hello@nanofy.in'
					>
						hello@nanofy.in
					</a>
				</p>
			</div>
		</div>
	);
};

export default DmcaPage;
