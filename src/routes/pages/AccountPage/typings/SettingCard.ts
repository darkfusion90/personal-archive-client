export interface ISettingCardProps {
    title: React.ReactNode
    subtitle: React.ReactNode
    extra?: React.ReactNode
    action: React.ReactNode
}

export type ISettingCard = React.ComponentType<ISettingCardProps>

export type ISettingCardInfoProps = Omit<ISettingCardProps, 'action'> & { className?: string }
export type ISettingCardInfo = React.ComponentType<ISettingCardInfoProps>

export type ISettingCardActionProps = Pick<ISettingCardProps, 'action'> & { className?: string }
export type ISettingCardAction = React.ComponentType<ISettingCardActionProps>

