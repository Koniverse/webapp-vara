import useStyles from './style'
import { Grid, useMediaQuery } from '@mui/material'
import { ArrowsLeftRight, ChartBar, DropHalf } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import classNames from 'classnames'
import { theme } from '@static/theme'

const routes = [
  {
    path: 'exchange',
    name: 'Exchange',
    icon: ArrowsLeftRight
  },
  {
    path: 'liquidity',
    name: 'Liquidity',
    icon: DropHalf
  },
  {
    path: 'statistics',
    name: 'Statistics',
    icon: ChartBar
  }
]

export const Footer = () => {
  const { classes } = useStyles();
  const [activePath, setActive] = useState('exchange')
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const otherRoutesToHighlight: Record<string, RegExp[]> = {
    liquidity: [/^newPosition\/*/, /^position\/*/],
    exchange: [/^exchange\/*/]
  }

  return (
    <Grid className={classes.footer}>
      {isMobile && (
        <div className={classes.tabsContainer}>
          {routes.map(route => {
            const Icon = route.icon

            return (
              <Link
                key={`path-${route.path}`}
                to={`/${route.path}`}
                className={classes.tabItemWrapper}>
                <div
                  className={classNames(classes.tabItem, {
                    '-active':
                      route.path === activePath ||
                      (!!otherRoutesToHighlight[route.path] &&
                        otherRoutesToHighlight[route.path].some(pathRegex =>
                          pathRegex.test(activePath)
                        ))
                  })}
                  onClick={e => {
                    if (route.path === 'exchange' && activePath.startsWith('exchange')) {
                      e.preventDefault()
                    }

                    setActive(route.path)
                  }}>
                <span className={classes.tabIcon}>
                  <Icon weight={'fill'} />
                </span>

                  <span className={classes.tabName}>{route.name}</span>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </Grid>
  )

  // return (
  //   <Grid className={classes.footer}>
  //     <Grid className={classes.footerItem}>
  //       <TooltipHover text='Github'>
  //         <a href={social.github} className={classes.footerLink} target='_blank'>
  //           <img className={classes.icon} src={icons.GithubIcon} alt={'github icon'} />
  //         </a>
  //       </TooltipHover>
  //     </Grid>
  //     <Grid className={classes.footerItem}>
  //       <TooltipHover text='Telegram'>
  //         <a href={social.telegram} className={classes.footerLink} target='_blank'>
  //           <img className={classes.icon} src={icons.TelegramIcon} alt={'telegram icon'} />
  //         </a>
  //       </TooltipHover>
  //     </Grid>
  //     <Grid className={classes.footerItem}>
  //       <TooltipHover text='X'>
  //         <a href={social.x} className={classes.footerLink} target='_blank'>
  //           <img className={classes.icon} src={icons.XIcon} alt={'x icon'} />
  //         </a>
  //       </TooltipHover>
  //     </Grid>
  //     <Grid className={classes.footerItem}>
  //       <TooltipHover text='Discord'>
  //         <a href={social.discord} className={classes.footerLink} target='_blank'>
  //           <img className={classes.icon} src={icons.DiscordIcon} alt={'discord icon'} />
  //         </a>
  //       </TooltipHover>
  //     </Grid>
  //     <Grid className={classes.footerItem}>
  //       <TooltipHover text='Medium'>
  //         <a href={social.medium} className={classes.footerLink} target='_blank'>
  //           <img className={classes.icon} src={icons.mediumIcon} alt={'medium icon'} />
  //         </a>
  //       </TooltipHover>
  //     </Grid>
  //     <Grid className={classes.footerItem}>
  //       <TooltipHover text='Docs'>
  //         <a href={social.docs} className={classes.footerLink} target='_blank'>
  //           <img className={classes.icon} src={icons.docsIcon} alt={'medium icon'} />
  //         </a>
  //       </TooltipHover>
  //     </Grid>
  //   </Grid>
  // )
}

export default Footer
