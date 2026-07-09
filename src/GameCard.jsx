import { motion, useMotionValue, useTransform, useSpring } from 'motion/react'
import { useRef } from 'react'
import GlareHover from './GlareHover'

export default function GameCard({ game, onClick, onDelete }) {
  const ref = useRef(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), { stiffness: 200, damping: 20 })

  const hasCover = game.cover && game.cover.trim()

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  function handleMouseLeave() {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <div
      ref={ref}
      className="game-card"
      onClick={() => onClick(game.id)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: 'pointer' }}
    >
      {/* Shadow layer */}
      <motion.div
        style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '90%',
          height: '90%',
          background: 'rgba(0,0,0,0.5)',
          borderRadius: 'var(--radius)',
          transformOrigin: 'top center',
          rotateX,
          scale: useTransform(rotateX, [7, 0, -7], [1.05, 1, 1.05]),
          opacity: useTransform(rotateX, [7, 0, -7], [0.6, 0.5, 0.6]),
        }}
      />

      {/* GlareHover cover */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          transformOrigin: 'top center',
          rotateX,
          rotateY,
        }}
      >
        <GlareHover
          width="100%"
          height="100%"
          background={hasCover ? 'transparent' : game.color}
          borderRadius="var(--radius)"
          borderColor="transparent"
          glareColor="#ffffff"
          glareOpacity={0.4}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
          style={hasCover ? {
            backgroundImage: `url('${game.cover}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          } : {}}
        >
          {!hasCover && (
            <div className="game-card-generated">
              <div className="game-card-generated-icon">{game.icon}</div>
              <div className="game-card-generated-name">{game.name}</div>
            </div>
          )}

          <div className="game-card-scrim" />
          <div className="game-card-title">{game.name}</div>
        </GlareHover>
      </motion.div>

      {/* Delete button */}
      <motion.button
        className="game-card-delete"
        onClick={(e) => { e.stopPropagation(); onDelete(game.id) }}
        title="Delete"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, background: 'var(--danger)', color: '#fff' }}
        style={{ opacity: 0 }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = 1 }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = 0 }}
      >
        ✕
      </motion.button>
    </div>
  )
}
