
import { SecondaryLinkButton } from '@/components/ui/Buttons';

export default async function BlogContent({ content }: any) {
    return (
        <div className='mx-auto max-w-3xl mt-14 mb-14'>
            <div className='prose dark:prose-dark'>
                {content}
                </div>
            <div className="mt-8 text-center">
                <SecondaryLinkButton label={'Back to blog'} showBorder={true} to={'/blog'} arrowLeft={true} />
            </div>
        </div>
    )
}